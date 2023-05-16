let cropper;

// Function to handle image file selection and display preview
function handleImageUpload(event) {
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function(e) {
            const image = new Image();
            image.src = e.target.result;

            image.onload = function() {
                // Create an image element for preview
                const preview = document.createElement("img");
                preview.id = "previewImage";
                preview.src = image.src;
                preview.style.maxWidth = "100%";
                preview.style.maxHeight = "400px";

                // Append the preview image to the container
                const container = document.getElementById("profile-picture");
                container.innerHTML = "";
                container.appendChild(preview);

                // Initialize Cropper.js
                cropper = new Cropper(preview, {
                    initialAspectRatio: 1,
                    aspectRatio: 1, // Set the desired aspect ratio for cropping
                    viewMode: 2, // Enable responsive mode
                    minCanvasHeight: 100,
                    minCropBoxWidth: 100,
                });
            };
        };

        reader.readAsDataURL(file);
    }
}

function dataImageToBlob(imageData) {
    const byteString = atob(imageData.split(',')[1]);
    // console.log({ byteString });
    const mineString = imageData.split(',')[0].split(':')[1].split(';')[0];
    // console.log({ mineString });
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);

    for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }

    const blob = new Blob([ab], { type: mineString });
    // console.log({ blob });

    return blob;
}

// Function to crop and upload the image
function cropAndUpload(form) {
    if (cropper && form) {
        console.log({ cropper, form });
        const croppedCanvas = cropper.getCroppedCanvas();
        const croppedImage = croppedCanvas.toDataURL("image/jpeg");
        // const blobedImage = new Blob([croppedImage], { type: "image/jpeg" });
        const blobedImage = dataImageToBlob(croppedImage);
        const logoFile = new File([blobedImage], 'image.jpg')
        var formdata = new FormData();

        // document.getElementById('cropped-profile-picture').innerHTML = "<img src='" + croppedImage + "' style='width:100%'>"
        // document.getElementById('cropped-profile-picture-2').innerHTML = "<img src='" + URL.createObjectURL(blobedImage) + "' style='width:100%'>"

        // console.log({ croppedImage });
        // console.log({ blobedImage });
        // console.log({ logoFile });

        formdata.append("logo", logoFile);
        // You can replace the URL below with your server endpoint to handle the file upload
        const uploadUrl = form.action;
        const uploadToken = atob(form.getAttribute('permissionKey'));
        // console.log({ uploadUrl, uploadToken, "form.permissionKey": form.getAttribute('permissionKey') });

        Swal.fire({
            title: 'Are you sure?',
            text: 'You are about to upload the image',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No'
        }).then((result) => {
            console.log({
                result,
                "result.value": result.value,
                "result.value == true": result.value == true,
                "result.dismiss": result.dismiss,
                'result.dismiss == "cancel"': result.dismiss == "cancel"
            });
            if (result.value == true) {
                Swal.showLoading('Uploading image');

                fetch(uploadUrl, {
                    method: 'PATCH',
                    body: formdata,
                    headers: {
                        'Authorization': 'Token ' + uploadToken,
                    },
                    redirect: 'follow'
                }).then((response) => {
                    if (response.ok) {
                        // Show success message
                        Swal.fire("Success", "Image uploaded successfully", "success");
                        setTimeout(() => {
                            window.location.reload();
                        }, 500)
                    } else {
                        // Show error message
                        Swal.fire("Error", "Failed to upload image", "error");
                    }
                }).catch((error) => {
                    // Show error message
                    Swal.fire("Error", "Failed to upload image", "error");
                });
            }
        });
    }
}

// Attach event listener to the image input
const profile_img = document.getElementById("profile_img");
profile_img.addEventListener("change", handleImageUpload);

const forms = document.querySelectorAll('[crop-upload-posts]');
console.log({ forms });

for (let i = 0; i < forms.length; i++) {
    const form = forms[i];

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            cropAndUpload(form);
        });
    }
}