<script>
					// Get the modal

						function enlargeImage() {
  document.getElementById("img01").src = this.src;
  document.getElementById("caption").innerHTML = this.alt;
  document.getElementById('myModal').style.display = "block";
}

(function() {
  var images = document.getElementsByClassName("myImg");
  for (i = 0; i < images.length; i++) {
    images[i].onclick = enlargeImage;
  }
})();
</script>