import Router from 'next/router';
import cookies from 'next-cookies';
export const auth = (ctx)=>{
    const {token} = cookies(ctx);
    if (ctx.req && !token) {
        ctx.res.writeHead(302, { Location: '/admin/login' })
        ctx.res.end()
        return
      }
      if (!token) {
        Router.push('/admin/login')
      }
      return token
}
const getDisplayName = Component =>Component.displayName || Component.name || 'Component' ;
export const withAuthSync = WrappedComponent =>{
    const Component=(props)=>{
        return (
            <WrappedComponent {...props}/>
        )
    }
    Component.displayName= `withAuthSync${getDisplayName(WrappedComponent)}`;
    Component.getInitialProps = async({ctx})=>{
        const token = auth(ctx)
      const componentProps =
        WrappedComponent.getInitialProps &&
        (await WrappedComponent.getInitialProps(ctx))

      return { ...componentProps, token }
    }
    return Component ;
}