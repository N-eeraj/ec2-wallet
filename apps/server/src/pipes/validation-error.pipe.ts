import {
  Injectable,
  PipeTransform,
  ValidationPipe,
  HttpException,
  HttpStatus,
  ArgumentMetadata,
} from "@nestjs/common"

@Injectable()
export class ValidationErrorPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const validationPipe = new ValidationPipe({
      exceptionFactory: (errors) => {
        const formattedErrors = errors.reduce((formattedErrors, error) => {
          const constraints = error.constraints ? Object.values(error.constraints) : []
          formattedErrors[error.property] = constraints
          return formattedErrors
        }, {})
        throw new HttpException({
            status: HttpStatus.BAD_REQUEST,
            message: "Invalid Input",
            errors: formattedErrors,
          }, HttpStatus.BAD_REQUEST
        )
      },
    })

    return validationPipe.transform(value, metadata)
  }
}
