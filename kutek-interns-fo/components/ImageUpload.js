import { useState } from 'react'
import { API_URL } from '@/config/index'
import styles from '@/styles/Add.module.css'

export default function ImageUpload({ devId, imageUploaded }) {
  const [image, setImage] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('files', image)
    formData.append('ref', 'developers')
    formData.append('refId', devId)
    formData.append('field', 'image')

    const res = await fetch(`${API_URL}/api/upload`, {
      method: 'POST',
    //    headers: {
    //      Authorization: `Bearer ${token}`,
    //    },
      body: formData,
    })

    if (res.ok) {
      imageUploaded()
    }
  }

  const handleFileChange = (e) => {
    setImage(e.target.files[0])
  }

  return (
    <div className={styles.form}>
      <h1>Upload Developer Image</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.file}>
          <input type='file' onChange={handleFileChange} />
        </div>
        <input type='submit' value='Upload' className='btn' />
      </form>
    </div>
  )
}