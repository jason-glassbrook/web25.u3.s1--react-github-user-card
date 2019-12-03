/*******************************************************************************
  PARAMS
*******************************************************************************/

/// internal modules ///
import check from '../iffy/is-type';

/*//////////////////////////////////////
  tools
//////////////////////////////////////*/
const isNonEmptyString = (x) => (check.isString (x) && x !== '');

Array.prototype.first = function () {
  return (this[0]);
};

Array.prototype.last = function () {
  return (this[this.length - 1]);
};

Array.prototype.rest = function () {
  return (this.slice (1 , this.length));
};

/***************************************
  PATTERN
***************************************/
export const paramTypes = [ '/' , '?' ];

export const pattern = (type , name) => {
  const make = (s) => (new RegExp (s));
  switch (type) {
    case '/' :
      return (make (`.*[/]${name}/([^/]+).*`));
    case '?' :
      return (make (`.*[?&]${name}=([^&]+).*`));
    default :
      return (null);
  }
}

/***************************************
  PARAMS
***************************************/
export const params = (type) => ({
  match : function (name , url) {
    /// match //
    if (isNonEmptyString (name) && isNonEmptyString (url)) {
      /// get pattern ///
      const pat = pattern (type , name);

      /// get matches ///
      if (pat) { return (pat.exec (url).rest ()); }
    }
    /// default ///
    return (null);
  },
  matchFirst : function (name , url) {
    return (this.match (name , url).first ())
  },
  matchLast : function (name , url) {
    return (this.match (name , url).last ())
  },

  /*******************
    FROM INFO
  *******************/
  fromInfo : function (info) {
    return ({
      getPages : () => ({
        'prev' : this.fromInfo (info).getPrevPage (),
        'curr' : this.fromInfo (info).getCurrPage (),
        'next' : this.fromInfo (info).getNextPage (),
      }),
      getCurrPage : () => {
        const prevPage = this.fromInfo (info).getPrevPage ();
        const nextPage = this.fromInfo (info).getNextPage ();
        if (prevPage) {
          return (prevPage + 1);
        }
        if (nextPage) {
          return (nextPage - 1);
        }
        return (null);
      },
      getPrevPage : () => (this.matchLast ('page' , info.prev)),
      getNextPage : () => (this.matchLast ('page' , info.next)),
    })
  },
});

/*******************
  URL PARAMS
*******************/
export const urlParams = params ('/');

/*******************
  QUERY PARAMS
*******************/
export const queryParams = params ('?');

/***************************************
  GET VALUES FROM STANDARD INFO
***************************************/
export const getQueryPage = (info) => {
  let page = null;
  if (page === null && info.prev !== '') {
    page = queryParams.matchLast ('page' , info.prev);
  }
  if (page === null && info.next !== '') {
    page = queryParams.matchLast ('page' , info.next);
  }
};

/// exports ///
export default ({
  paramTypes,
  pattern,
  params,
  urlParams,
  queryParams,
});
