import { IsString, IsNotEmpty, IsBoolean } from "class-validator";
import { IsNotBlank } from "src/decorators/isNotBlank-decorator";

export class TaskDTO {

  @IsNotBlank({message: "El título no puede estar vacio"})
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsBoolean()
  state?: boolean;
}
