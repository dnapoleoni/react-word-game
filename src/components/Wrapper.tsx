function Wrapper(props: any) { 
  return (
    <div className="max-w-md flex flex-col gap-y-4 mx-auto py-4 items-center">{props.children}</div>
  )
}

export default Wrapper