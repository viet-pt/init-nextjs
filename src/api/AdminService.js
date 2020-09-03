import { BACKEND_API } from './_config';
import { CommonService } from './CommonService';
import { cui } from 'components/CommonComponents';
import { postRequestNext } from './_http';

const vplusURL = 'https://apiquantri.vinaphoneplus.com.vn/api/APIForWebApp';

const transformCateList = function (response) {
  const cateList = response.data;
  cui.each(cateList, item => {
    item.url = CommonService.changeAlias(item.name);
  });
  return cateList;
};

export const AdminService = {
  getNews: async function (data) {
    const URL = `${vplusURL}/TinhDK_TinTuc_GetTinTuc`;
    return await postRequestNext(URL, data, {});
  },
  
}
