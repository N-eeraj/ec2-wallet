import {
  type Path,
} from "react-hook-form"
import {
  type z,
  type ZodObject,
  type ZodRawShape,
} from "zod/v4"

export type FormErrorPath<Schema> = Path<z.input<ZodObject<Schema["shape"]>>>
