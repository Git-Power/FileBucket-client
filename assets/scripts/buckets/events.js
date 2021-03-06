const api = require('./api.js')
const ui = require('./ui.js')

const onUploadBucket = function (event) {
  event.preventDefault()
  const form = new FormData(event.target)
  api.uploadBucket(form)
    .then(() => onGetAllBuckets(event))
    .then(ui.uploadBucketSuccess)
    .catch(ui.uploadBucketFailure)
}

const onDeleteBucket = function () {
  event.preventDefault()
  const bucketId = $(event.target).closest('section').data('id')
  api.deleteBucket(bucketId)
    .then(() => onGetMyBuckets(event))
    .catch(ui.deleteBucketFailure)
}

const onUpdateBucket = function (event) {
  event.preventDefault()
  const data = {}
  data.tags = $(event.target).closest('form').find('input').val()
  data.id = $(event.target).closest('section').data('id')
  api.updateBucket(data)
    // .then(() => onGetMyBuckets(event))
    .then(ui.updateBucketSuccess)
    .catch(ui.updateBucketFailure)
}

const onGetAllBuckets = function () {
  api.getAllBuckets()
    .then(ui.getAllBucketsSuccess)
    .catch(ui.getAllBucketsFailure)
}

const onGetMyBuckets = function () {
  api.getAllBuckets()
    .then(ui.getMyBucketsSuccess)
    .catch(ui.getMyBucketsFailure)
}

const onSearchBuckets = event => {
  event.preventDefault()
  api.getAllBuckets()
    .then(ui.searchBucketsSuccess)
    .catch(ui.searchBucketsfailure)
}

module.exports = {
  onUploadBucket,
  onDeleteBucket,
  onUpdateBucket,
  onGetAllBuckets,
  onGetMyBuckets,
  onSearchBuckets
}
