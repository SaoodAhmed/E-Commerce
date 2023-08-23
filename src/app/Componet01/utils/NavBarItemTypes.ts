export type NavBarType = {
    href:string,
    label:string,
    isDropDown:boolean,
    dropDownData?:Array<NavBarType>
}