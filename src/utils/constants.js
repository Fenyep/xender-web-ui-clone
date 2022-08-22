// Color Palette
export const whiteColor = "#ffffff";
export const redColor = "#E14037";
export const blueColor = "#5596F3";
export const yellowColor= "#EFBD5F";
export const greenColor = "#5BAF4F";
export const pinkColor = "#E02963";
export const purpleColor = "#9C27B0";
export const greyColor = "#666666";
export const greySecondaryColor= "#A1A1A1";

export const menuItemTextColor = "#948B8F";
export const menuItemBorderColor = "#E1E1E1";

export const imageDisplayDateDividerColor = '#EEEEEE';


export const iconPrimaryColor = "#666666";
export const headerBottomBorderColor = "#E6E6E6";
export const headerIconPrimaryColor = "#828282";
export const homeIconHoverBackgroundColor = "#5BAF2A";

export const deactivatedColor = '#E6E6E6';
export const deactivatedColor2 = '#7C7C7C';




export const homeItemIconSize = 45;

// Buttons colors
export const imagesDownloadButtonColor = "#E25032";

export const getCalcYear = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.getFullYear();
}

export const getCalcDay = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.getDate();
}

export const getMonthText = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const value = date.getMonth()+1;

    switch(value) {
      case 1:
        return 'January';
      case 2:
        return 'February';
      case 3:
        return 'March';
      case 4:
        return 'April';
      case 5:
        return 'Mai';
      case 6:
        return 'June';
      case 7:
        return 'July';
      case 8:
        return 'August';
      case 9:
        return 'September';
      case 10:
        return 'October';
      case 11:
        return 'November';
      case 12:
        return 'December';
      default:
        return 'Unknown';
    }
  }
  
export const hexToRgbA = (color) =>{
    var c;
    if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(color)){
        c= color.substring(1).split('');
        if(c.length === 3){
            c= [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c= '0x'+c.join('');
        return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+',1)';
    }
    throw new Error('Bad Hex');
}