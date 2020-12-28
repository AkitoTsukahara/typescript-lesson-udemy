export {};

type DebugType = () => void;
type SomeTypes = string | number | DebugType;
type FuctionType = Exclude<SomeTypes, string | number>;
type NumFunctionType = Exclude<SomeTypes, DebugType>;
type TypeExcludeFunction = Exclude<SomeTypes, Function>;

type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;
type NonFunctionTypeByExtract = Extract<SomeTypes, string | number>;
type FuntionTypeExtractingFunction = Extract<SomeTypes, Function>;

type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>;