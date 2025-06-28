function formatPhoneNumber( input: string ) {
  return input.replace( /^(\d{4})(\d{3})(\d{3})$/, '$1-$2-$3' );
}

export {
  formatPhoneNumber
}