export function humanizeDate(myDate) {
    const date = new Date(myDate);
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
  
    return `${monthNames[monthIndex]} ${day < 10 ? '0' + day : day} ${year}`;
}

export function organizeByDate(array){
    return array.sort((a,b) => {
      return new Date(b.date) - new Date(a.date);
    });
}