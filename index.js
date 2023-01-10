const chooseImage = () => {
    let image = document.getElementById("image");
    image.click();
    console.log("hello world")
};

let image = document.getElementById("image");
let file1 = document.getElementById("image");
image.addEventListener("change", (e) => {
    const [file] = image.files;
    if (file) {
        document.getElementById("updated_img").src = URL.createObjectURL(file);
    }
});

//do it using the upload file function
document.getElementById("updated_img").src = "food.jpg";

function change_val() {
    let s = document.getElementById("adjust").value;
    document.getElementById("adj_val").innerText = s + "%";

    let r = document.getElementById("fil").innerText;
    let a = r + "(" + s + "%)";
    document.getElementById("updated_img").style.filter = a;

}

function fil_val(id) {
    console.log(id)
    document.getElementById("fil").innerText = id;
}

function reset_ftn() {

    let imeg = document.getElementById("updated_img");
    imeg.style.filter = "brightness(100%)";
    document.getElementById("adjust").value = 100;
    document.getElementById("adj_val").innerText = "100%";

}


function grayScale() {
    let val = document.getElementById("slider-gray").value;
    document.getElementById("slider-gray-id").innerText = val + "%";
    let b = "grayscale(" + val + "%)";
    document.getElementById("updated_img").style.filter = b;


}

function rotate_img() {
    let val = document.getElementById("rt-id").value;
    document.getElementById("rt-val").innerText = val + "deg";
    let b = "rotate(" + val + "deg)"
    document.getElementById("updated_img").style.transform = b;

}

function blur_img() {
    let val = document.getElementById("bl_id").value;
    document.getElementById("bl_val").innerText = val + "px";
    let b = "blur(" + val + "px)"
    document.getElementById("updated_img").style.filter = b;

}

function sepia_img() {
    let val = document.getElementById("sp_id").value;
    document.getElementById("sp_val").innerText = val + "px";
    let b = "sepia(" + val + "%)";
    document.getElementById("updated_img").style.filter = b;
}
