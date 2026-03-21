import type ICertificateGenerator from "../interfaces/ICertificateGenerator";

export interface TlsConfig {
	key: Buffer;
	cert: Buffer;
	servername: string;
}

/**
 * Manages TLS certificates for Bun.serve() SNI support.
 * Caches generated certificates and provides them in a format
 * compatible with Bun's TLS array configuration.
 */
export default class TlsCertificateManager {
	private certificateCache = new Map<string, TlsConfig>();
	private pendingCertificates = new Map<string, Promise<TlsConfig>>();
	private defaultConfig: TlsConfig | null = null;

	constructor(
		private readonly certificateGenerator: ICertificateGenerator,
		private readonly defaultHostname: string = "localhost",
	) {}

	/**
	 * Get or generate a certificate for the given hostname.
	 * Uses caching to avoid regenerating certificates for known hosts.
	 */
	async getCertificate(hostname: string): Promise<TlsConfig> {
		// Normalize hostname (remove port if present)
		const normalizedHostname = hostname.includes(":")
			? hostname.split(":")[0]!
			: hostname;

		// Check cache first
		const cached = this.certificateCache.get(normalizedHostname);
		if (cached) return cached;

		// Check if generation is already in progress
		const pending = this.pendingCertificates.get(normalizedHostname);
		if (pending) return pending;

		// Start generation
		const promise = this.generateCertificate(normalizedHostname);
		this.pendingCertificates.set(normalizedHostname, promise);

		try {
			const config = await promise;
			this.certificateCache.set(normalizedHostname, config);
			return config;
		} finally {
			this.pendingCertificates.delete(normalizedHostname);
		}
	}

	/**
	 * Check if a certificate is already cached for the given hostname.
	 */
	hasCached(hostname: string): boolean {
		const normalizedHostname = hostname.includes(":")
			? hostname.split(":")[0]!
			: hostname;
		return this.certificateCache.has(normalizedHostname);
	}

	/**
	 * Get all cached TLS configs for Bun.serve() TLS array.
	 */
	getAllCached(): TlsConfig[] {
		return Array.from(this.certificateCache.values());
	}

	/**
	 * Initialize with a default certificate.
	 * This is used as a fallback when no matching SNI is found.
	 */
	async initialize(): Promise<void> {
		if (this.defaultConfig) return;

		const { key, cert } = await this.certificateGenerator.getCertificate(
			this.defaultHostname,
		);
		if (key && cert) {
			this.defaultConfig = { key, cert, servername: this.defaultHostname };
			this.certificateCache.set(this.defaultHostname, this.defaultConfig);
		}
	}

	/**
	 * Get the default TLS config.
	 */
	getDefault(): TlsConfig | null {
		return this.defaultConfig;
	}

	/**
	 * Clear all cached certificates.
	 */
	clear(): void {
		this.certificateCache.clear();
		this.pendingCertificates.clear();
		this.defaultConfig = null;
	}

	private async generateCertificate(hostname: string): Promise<TlsConfig> {
		const { key, cert } = await this.certificateGenerator.getCertificate(hostname);
		if (!key || !cert) {
			throw new Error(`Failed to generate certificate for ${hostname}`);
		}
		return { key, cert, servername: hostname };
	}
}
