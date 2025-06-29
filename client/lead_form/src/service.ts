
const ctreateLead = async ( data: any ) => {
  // const url = import.meta.env.VITE_API_URL;
  // if ( !url ) {
  //   throw new Error( 'API URL is not defined' );
  // }
  const response = await fetch( `/api/v1/leads`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify( data ),
  } );

  if ( !response.ok ) {
    throw new Error( 'Failed to create lead' );
  }

  return await response.json();
}
export {
  ctreateLead
}