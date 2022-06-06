export class CreateProductDto {
  readonly name: string;
  readonly description: string;
  readonly image: string;
  readonly price: string
}


export class UpdateProductDto {
  readonly name?: string;
  readonly description?: string;
  readonly image?: string;
  readonly price?: string
}
