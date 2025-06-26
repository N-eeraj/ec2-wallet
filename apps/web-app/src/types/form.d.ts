import {
  type Path,
} from "react-hook-form"
import {
  type z,
  type ZodObject,
} from "zod/v4"

export type FormErrorPath<SchemaShape> = Path<z.input<ZodObject<SchemaShape>>>
