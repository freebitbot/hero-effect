import type { IBaseConfig } from "../lib/BaseSchema";
import type { IBigintSchemaConfig } from "../lib/BigintSchema";
import type { IBooleanSchemaConfig } from "../lib/BooleanSchema";
import type { IBufferSchemaConfig } from "../lib/BufferSchema";
import type { IDateSchemaConfig } from "../lib/DateSchema";
import type { INumberSchemaConfig } from "../lib/NumberSchema";
import type { IStringSchemaConfig } from "../lib/StringSchema";

export type IAnySchemaJson =
	| IArraySchemaJson
	| IObjectSchemaJson
	| IBigintSchemaJson
	| IBooleanSchemaJson
	| IBufferSchemaJson
	| IDateSchemaJson
	| IStringSchemaJson
	| INumberSchemaJson
	| IRecordSchemaJson;

export interface IArraySchemaJson extends IBaseConfig {
	typeName: "array";
	element: IObjectSchemaJson;
}

export interface IObjectSchemaJson extends IBaseConfig {
	typeName: "object";
	fields: Record<string, IAnySchemaJson>;
}

export interface IBigintSchemaJson extends IBigintSchemaConfig {
	typeName: "bigint";
}

export interface IBooleanSchemaJson extends IBooleanSchemaConfig {
	typeName: "boolean";
}

export interface IBufferSchemaJson extends IBufferSchemaConfig {
	typeName: "buffer";
}

export interface IDateSchemaJson extends IDateSchemaConfig {
	typeName: "date";
}

export interface INumberSchemaJson extends INumberSchemaConfig {
	typeName: "number";
}

export interface IStringSchemaJson extends IStringSchemaConfig {
	typeName: "string";
}

export interface IRecordSchemaJson extends IBaseConfig {
	typeName: "record";
	values: IAnySchemaJson;
	keys?: IStringSchemaJson;
}
