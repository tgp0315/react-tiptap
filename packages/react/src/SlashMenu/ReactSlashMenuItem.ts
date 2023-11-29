import {
  BaseSlashMenuItem,
  BlockSchema,
  DefaultBlockSchema,
} from "../../../core/src";

export type ReactSlashMenuItem<
  BSchema extends BlockSchema = DefaultBlockSchema
> = BaseSlashMenuItem<BSchema> & {
  group: string;
  icon: JSX.Element;
  hint?: string;
  shortcut?: string;
};
