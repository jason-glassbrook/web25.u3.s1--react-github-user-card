/*******************************************************************************
  REMOTE
*******************************************************************************/

/// external modules ///
import axios from "axios";

/// internal modules ///
import check from '../iffy/is-type';

/*//////////////////////////////////////
  tools
//////////////////////////////////////*/
const ifFunction = (fun , args , message) => {
  if (check.isFunction (fun)) {
    console.log (message);
    console.log (...args);
    fun (...args);
  }
}

/*--------------------------------------
  handleAxiosError
----------------------------------------
  based on: <https://github.com/axios/axios#handling-errors>
--------------------------------------*/
export const handleAxiosError = (axiosError) => {
  let message = {};

  if (axiosError.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.log ('The server did respond, but with an error:');
    console.log ('- data:' , axiosError.response.data);
    console.log ('- status:' , axiosError.response.status);
    console.log ('- headers:' , axiosError.response.headers);

    message = axiosError.response.data;
  }
  else if (axiosError.request) {
    // The request was made but no response was received
    // `axiosError.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    console.log ('The server did not respond:');
    console.log ('- request:' , axiosError.request);

    message['errors'] = [
      'The server did not respond.',
    ];
  }
  else {
    // Something happened in setting up the request that triggered an Error
    console.log ('An runtime error occured:');
    console.log ('- Error:', axiosError.message);

    message['errors'] = {
      'oops' : axiosError.message,
    };
  }
  console.log ('- config:' , axiosError.config);

  return (message);
}

export const handleGoodResponse = (handleResponse , handleData , initData) => (axiosResponse) => {
  console.log ("--- success? ---");
  /// parse data ///
  const re = axiosResponse.data;
  /// handle response ///
  ifFunction (
    handleResponse ,
    [{ 'data' : re , 'errors' : null , 'from' : axiosResponse }] ,
    '...handling response...' ,
  );
  /// handle data ///
  ifFunction (
    handleData ,
    [{ ...initData , ...re }] ,
    '...handling data...' ,
  );
}

export const handleErrorResponse = (handleError , handleData , initData) => (axiosError) => {
  console.log ("--- failure? ---");
  /// parse out axiosError ///
  const re = handleAxiosError (axiosError);
  /// handle error ///
  ifFunction (
    handleError ,
    [{ 'data' : null , 'errors' : re , 'from' : axiosError }] ,
    '...handling error...' ,
  );
  /// handle data ///
  ifFunction (
    handleData ,
    [{ ...initData , ...re }] ,
    '...handling data...' ,
  );
}

/***************************************
  REMOTE
***************************************/

export class remote {
  /*******************
    GENERIC REQUEST
  *******************/
  request = (
    {
      method ,
      doBefore = () => { console.log ("--- making remote request... ---"); } ,
      doAfter = () => { console.log ("--- done. ---"); } ,
    }
  ) => (
    { handleResponse , handleError , handleData , initData }
  ) => (
    ...args
  ) => {
    doBefore ();
    axios[method] (...args)
      .then (handleGoodResponse (handleResponse , handleData , initData))
      .catch (handleErrorResponse (handleError , handleData , initData))
      .finally (doAfter);
  };

  /*******************
    GET
  *******************/
  get = remote.request ({
    method : 'get' ,
    doBefore : () => { console.log ("--- getting remote data... ---"); }
  });

  /*******************
    POST
  *******************/
  post = remote.request ({
    method : 'post' ,
    doBefore : () => { console.log ("--- posting remote data... ---"); }
  });

  /*******************
    PUT
  *******************/
  put = remote.request ({
    method : 'put' ,
    doBefore : () => { console.log ("--- putting remote data... ---"); }
  });

  /*******************
    DELETE
  *******************/
  delete = remote.request ({
    method : 'delete' ,
    doBefore : () => { console.log ("--- deleting remote data... ---"); }
  });
};

/// exports ///
export default remote;
