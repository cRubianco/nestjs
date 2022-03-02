import { IsString, IsNotEmpty, IsBoolean } from "class-validator";
import { IsNotBlank } from "src/decorators/isNotBlank-decorator";

export class TaskDTO {

  @IsNotBlank({message: "El título no puede estar vacio"})
  title: string;

  @IsString({message: "La descripción debe ser una cadena de caracteres"})
  @IsNotEmpty()
  description: string;

  @IsBoolean({message: "Espera un valor booleano"})
  state?: boolean;
}
