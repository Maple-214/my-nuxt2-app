export default function ({
  isHMR,
  app,
  store,
  route,
  params,
  error,
  redirect
}) {
  if (isHMR) return; //用来判断热更新
  // console.log({ full: route });
  if (route.fullPath == '/inquiry') {
    return redirect('/inquiry/type1')
  }
  if (route.fullPath == '/about') {
    return redirect('/about/type1')
  }
  if (route.fullPath == '/business') {
    return redirect('/business/type1')
  }
  if (route.fullPath == '/news') {
    return redirect('/news/type1')
  }
}
