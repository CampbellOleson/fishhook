import React, { useMemo } from "react";
import { useDropzone } from "react-dropzone";
import Dropzone from "react-dropzone";

const baseStyleImage = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#004fff",
  borderStyle: "dashed",
  backgroundColor: "#DCDCDC",
  color: "#888888",
  outline: "none",
  transition: "border .24s ease-in-out",
  margin: "7px"
};

const activeStyle = {
  borderColor: "#2196f3"
};

const acceptStyle = {
  borderColor: "#00e676"
};

const rejectStyle = {
  borderColor: "#ff1744"
};

const StyledDropzone = props => {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({ accept: "image/*" });

  const dimensions =
    props.type === "cover"
      ? {
          width: "500px",
          height: "120px"
        }
      : {
          width: "120px",
          height: "120px"
        };

  const style = useMemo(
    () => ({
      ...baseStyleImage,
      ...dimensions,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {})
    }),
    [isDragActive, isDragReject]
  );

  return (
    <Dropzone onDrop={image => props.fileDrop(image[0])}>
      {({ getRootProps, getInputProps }) => {
        return (
          <section className="dropzone">
            <div {...getRootProps({ style })}>
              <input {...getInputProps()} />
              <p>{`Add ${props.type} photo`}</p>
            </div>
          </section>
        );
      }}
    </Dropzone>
  );
};

export default StyledDropzone;
