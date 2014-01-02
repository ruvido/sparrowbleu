Setup
===========
1. Clone repo
2. Rename /settings/development(dot).py to development.py


**Windows:**

3. Copy fresdb from helper_files to your env scripts folder or somewhere else on your path.
  - update the local paths to your local paths
4. If you cant compile, copy PIL from helper_files to your env site-packages
5. Run ```freshdb```


**Mac**

3. run ```python manage.py freshdb```
4. smile :)


**AWS Config**

Set the following AWS environment variables on virtualenv activate (remember to clear them on deactivate):
```
set AWS_ACCESS_KEY_ID=<your_s3_access_id>
set AWS_SECRET_ACCESS_KEY=<your_s3_secret_access_key>
set S3_BUCKET=<your_s3_bucket_name>
```


SparrowBleu Photography
===========
This site will be the main site for SparrowBleu Photography.  It will showcase images and allow clients to select images from their photo shoots which they would like the photographer to further process.

# Goals

1. Private proofing galleries

~~2. Image galleries for various types of photography~~

## Private Proofing Galleries


### Photographer should be able to:

- Create price proofing galleries with
    - a name
    - a passcode
    - a number of images the client can choose to have processed
    - unlimited number of images

- Edit proofing galleries
    - Name, passcode, and number of selectable images
    - Add and delete images from the gallery

- Delete the entire gallery

- Drag and drop images from their desktop to the gallery add/edit form

### Client should be able to:

- Access a client access page with:
    - a passcode field
    - a "Go to gallery" button

- Enter a valid access code, click go to gallery and be taken directly to their private gallery craeted by the photographer

- Inside the Gallery
    - Click/Tap to choose images for further processing by the photographer
    - See which images they have selected
    - See the total number of images they can select
    - See how many images they have remaining to select


~~## Image Galleries~~

~~The site should have separate newborn, kids, families, engagement, and wedding galleries. These are static galleries updated by the photographer infrequently (~4 times per year).~~

~~- Each gallery should:~~
    ~~- have a top nav link~~
    ~~- play automatically~~
    ~~- should transition between photos~~
    ~~- should show thumbs of all the images in the gallery~~
    ~~- should auto repeat~~
