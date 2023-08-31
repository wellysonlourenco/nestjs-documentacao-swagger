export class CreateUserDto {
  //@ApiProperty({
  //  description: 'O nome  é utilizado para exibir os dados no perfil',
  //  example: 'wellyson',
  //})

  /**
   * O nome será utilizado para qualquer coisa (Perfil, Home Page, etc) que precise exibir
   * informações da pessoa conectada.
   * @example Paulo Salvatore
   */
  name: string;

  //@ApiProperty({
  //  description: 'O email  é utilizado para o login',
  //  example: 'wellyson@nest.js',
  //})

  /**
   * O e-mail é necessário apra o login, mas não necessariamente precisa ser o mesmo e-mail da
   * rede social que estiver conectada. Login sem rede social precisa de uma senha.
   * @example email@email.com
   */
  email: string;

  //@ApiProperty({
  //  description: 'Senha utilizada no login',
  //  example: 'Senh@123',
  //})

  /**
   * É possível conectar com redes sociais sem uma senha, mas para login usando o e-mail diretamente
   * é necessário informar uma senha.
   * @example 123@abc
   */
  password: string;
}
