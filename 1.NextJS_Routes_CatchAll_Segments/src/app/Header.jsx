
import Link from 'next/link'

const Header = () => {
  return (
    <div style={{display:'flex', gap:'20px', background:'black', height:'100px', color:'white'}}>
        <Link href='/sunday' style={{color:'white'}}>
        <div>Sunday</div>
        </Link>
        <Link href='/monday' style={{color:'white'}}>
        <div >Monday</div>
        </Link>
        <Link href='/mpc/maths' style={{color:'white'}}>
        <div>MPC</div>
        </Link>
        <Link href='/bpc/topper' style={{color:'white'}}>
        <div>BiPC</div>
        </Link>
    </div>
  )
}

export default Header
