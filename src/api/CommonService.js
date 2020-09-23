export const CommonService = {
  changeAlias: function (alias) {
    if (!alias) {
      return alias;
    }
    let str = alias;
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a'); 
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e'); 
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i'); 
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o'); 
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u'); 
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y'); 
    str = str.replace(/đ/g, 'd');
    str = str.replace(/!|@|%|\^|\*|\(|\)|\+|=|<|>|\?|\/|,|\.|:|;|'|“|”|"|&|#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, ' ');
    str = str.replace(/ + /g, ' ');
    str = str.trim(); 
    str = str.replace(/\s/g, '-');
    return str;
  },
  
  getPackageTitle: function(name) {
    switch (name) {
      case 'tich-hop':
        return 'Tích hợp';
      case 'data':
        return 'Data';
      case 'roaming':
        return 'Roaming';
      case 'thong-tin':
        return 'Thông tin';
      case 'home-combo':
        return 'Home Combo';
      case 'home-mobi':
        return 'Home Mobi';
      case 'home-tv':
        return 'Home TV';
      case 'home-internet':
        return 'Home Internet';
      case 'mytv':
        return 'MyTV';
      case 'mytv-net':
        return 'MyTV Net';
      case 'co-dinh':
        return 'Cố định';
      default:
        return 'Data';
    }
  },
  
}
