# Laqus Auth Front
O Laqus Auth Front é uma biblioteca JavaScript simples para manipulação de cookies no navegador.

## API

### `set(name, value, expires, path)`

Define um cookie com o nome especificado, valor, data de expiração e caminho.

- `name` (string): O nome do cookie.
- `value` (string): O valor do cookie.
- `expires` (Date): A data de expiração do cookie.
- `path` (string): O caminho para o qual o cookie é válido (opcional, padrão: /).

### `get(name)`

Obtém o valor de um cookie pelo nome especificado.

- `name` (string): O nome do cookie.

### `delete(name)`

Deleta um cookie pelo nome especificado.

- `name` (string): O nome do cookie a ser deletado.


## Exemplo de Uso

```javascript
import CookieAbstrator  from '@laqus/auth-front'

// Set a cookie
const expirationDate = new Date(Date.now() + 86400 * 1000); // 1 day in milliseconds
CookieAbstrator.set('yourCookieName', 'yourCookieValue', expirationDate, '/');

// Get a cookie
const cookieValue = CookieAbstrator.get('yourCookieName');
console.log('Cookie value:', cookieValue);

// Delete a cookie
CookieAbstrator.delete('yourCookieName');
console.log('Cookie deleted');
```