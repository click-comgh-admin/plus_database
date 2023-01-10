export const __swalStyle = `<style>#swal2-validation-message{
  display: flex !important;
  justify-content: flex-start !important;
  font-weight: 600 !important;
}#swal2-validation-message>ul{list-style: inside !important; margin: 0 !important;}</style>`;
export const https_swal_error_format = (error: any, addStyle = true) => {
  // console.log({"errorerror": error})
  if (Array.isArray(error)) {
    const style = addStyle ? __swalStyle : ``;
    let errorMsg = style + "<ul>";
    const DATAS: Array<any> = error
    // console.log({ DATAS });

    DATAS.forEach((data) => {
      // console.log({ data });
      if (typeof data === "string") {
        errorMsg += `<li>${data}</li>` + "\n";
      } else {
        errorMsg += `<li>${data.error}</li>` + "\n";
      }

    });
    return errorMsg = errorMsg + "</ul>";
  } else {
    throw new Error("Unknown error response format");
  }
}