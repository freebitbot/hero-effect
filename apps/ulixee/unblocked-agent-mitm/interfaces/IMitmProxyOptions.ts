import type ICertificateGenerator from "./ICertificateGenerator";

export default interface IMitmProxyOptions {
	port?: number;
	certificateGenerator: ICertificateGenerator;
}
