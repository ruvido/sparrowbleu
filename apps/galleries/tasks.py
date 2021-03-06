from __future__ import absolute_import
from celery import shared_task
# TODO: figure out why using 'from django.conf import settings' here throws boto_bucket not found
from settings import *
from django.core import management


@shared_task(name="delete_gallery_images")
def delete_gallery_images(gallery_pk):
    key_prefix = "%s" % gallery_pk

    for key in boto_bucket.list(prefix=key_prefix):
        key.delete()

    management.call_command('thumbnail', 'cleanup')
