import {Chair, DomainVerification, Home, PieChart, Summarize} from '@mui/icons-material';
import PersonIcon from '@mui/icons-material/Person';

// const {roles} = props;
// console.log(roles);

const roles = JSON.parse(localStorage.getItem('role'));
console.log("sidebar roles.......",roles);

const sideBardata=[{
    icon:<Home/>,
    iconname:"Dashboard",
    path :"/dashboard",
    submenu:false
},
roles === 'USER' &&
{
    icon:<PersonIcon/>,
    iconname:"User",
    path :"/user",
    submenu:false
},
roles === 'USER' &&
{
    icon:<PieChart />,
    iconname:"Reports",
    // submenu:true,
    // subdata:[
    //     {
    //         subiconname:"Attendance"
    //     },
    //     {
    //         subiconname:"Hours Tracked"
    //     },
    //     {
    //         subiconname:"Timeline"
    //     },
    //     {
    //         subiconname:"Employee Logs"
    //     }
    // ]
    path:"/worktimereport"
},
roles === 'USER' &&
{
    icon:<Chair/>,
    iconname:"Holidays",
    submenu:false,
    path:"/holidaylist"

},
roles === 'ADMIN' &&
{
    icon:<DomainVerification/>,
    iconname:"Admin Leave",
    submenu:false,
    path:"/leavepage"
} ,

roles === 'USER' &&
{
    icon:<DomainVerification/>,
    iconname:"User Leave",
    submenu:false,
    path:"/userleavepage"
} 
// {
//     icon:<Summarize/>,
//     iconname:"Summary",
//     submenu:false,
//     path:"/summarypage"
// }
];
const arr=[];
sideBardata.map((x,key)=>{
   
    if(x!==false)
    {
        arr.push(x);
    }
    return x;  
}
)
console.log("arr---",arr);


export { sideBardata,arr} ;
