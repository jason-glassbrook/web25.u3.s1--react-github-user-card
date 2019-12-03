/*******************************************************************************
  IS TYPE
--------------------------------------------------------------------------------
  Functions to robustly check types.
--------------------------------------------------------------------------------
  based on: <https://stackoverflow.com/a/17772086>
  originally based on: <https://stackoverflow.com/a/7356528>
*******************************************************************************/

/*--------------------------------------
  isOf
  Check if input is of type _type_.
--------------------------------------*/
export const isOf = (name , maybe) => (
  maybe && (toString.call(maybe) === '[object ' + name + ']')
);

/*--------------------------------------
  check.is<_type_>
  Check if input is of type _type_.
--------------------------------------*/
export const check = (
  [
    'Arguments' ,
    'Function'  ,
    'String'    ,
    'Number'    ,
    'Date'      ,
    'RegExp'    ,
  ]
  .reduce ((obj , name) => {
    obj['is' + name] = (maybe) => (isOf (name , maybe));
    return (obj);
  } , {})
);

/*--------------------------------------
  default
--------------------------------------*/
export default ({ ...check , isOf })
