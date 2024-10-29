import { useState } from "react";
const Folder = ({ data }: any) => {
    const [btnClicked, setBtnClicked] = useState(false);
    console.log(data);

    if (data.isFolder) {
        return (
            <>
                <div onClick={() => setBtnClicked(!btnClicked)}>
                    <span>📂{data.name} <br /> </span>
                </div>

                <div style={{ display: btnClicked ? "block" : "none", paddingLeft: 10 }}>
                    {data.items.map((file: any) => (
                        <Folder
                            data={file}
                        />
                    ))}
                </div>
            </>
        )
    } else {
        return <span>📄{data.name}<br /></span>;
    }
}

export default Folder