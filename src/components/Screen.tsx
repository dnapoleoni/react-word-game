// css
const style = {
    screen: 'max-w-md flex flex-col gap-y-4 mx-auto py-4 items-center'
}

// output
export function Screen(props: any){
    return (
        <div className={ style.screen }>
           { props.children }
        </div>
    )
}