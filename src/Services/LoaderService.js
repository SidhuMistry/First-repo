export const loader = (flag) => {
    if(flag){
        document.documentElement.style.setProperty("--loader", "flex");
    }else{
        document.documentElement.style.setProperty("--loader", "none");
    }
    
}