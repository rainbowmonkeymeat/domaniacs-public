import Link from "next/link";

export default function Banner() {
    return(
        <header className="py-5 bg-light border-bottom mb-4">
        <div className="container">
            <div className="text-center my-5">
                <h1 className="fw-bolder">Welcome to Domainiacs!</h1>
                <p className="lead mb-0">Come to Terms With Your Domain Addiction</p>
                <p className="btn btn-link"><Link href='https://mailchi.mp/78c20f94ed5c/domainiacs-newletter'>Sign Up For Our Newsletter</Link></p>
            </div>
        </div>
    </header>
    )
}