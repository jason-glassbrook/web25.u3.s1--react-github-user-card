/// internal modules ///
import check from '../../tools/iffy/is-type';

export const routes = {
  here : {},
  there : {
    CORS : 'https://cors-anywhere.herokuapp.com/',
    GH : {
      base : 'https://api.github.com',
      path : {
        user : (username) => (`/users/${username}`),
        user_followers : (username) => (`/users/${username}/followers`),
        user_following : (username) => (`/users/${username}/following`),
      }
    },
  },
};

export const fullURL = (domain , point , ...args) => {
  // simply return domain as url if it's a string
  if (check.isString (domain)) {
    return (domain);
  }
  // compose url if domain looks right
  else if (domain && check.isString (domain.base)) {
    let base = domain.base;
    let path = '';

    // add point if it's a String
    if (check.isString (point)) {
      path = domain.path[point];
    }

    // use args in endpoint
    if (check.isFunction (path)) {
      path = path (...args);
    }

    return (base + path);
  }
  // otherwise
  else {
    return (null);
  }
};
