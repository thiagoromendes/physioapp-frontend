import {NextApiRequest, NextApiResponse} from 'next';

export default (request: NextApiRequest, response: NextApiResponse) => {

  // chamada para api do backend para login
  // exemplo de retorno

  const user = {
    'name': 'Thiago Mendes',
    'email': 'thiagoromendes@gmail.com'
  };

  return response.json(user);
}
