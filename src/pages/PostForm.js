import InputField from '../components/InputField'
import SelectField from '../components/SelectField'
import TextAreaField from '../components/TextAreaField'
import ButtonPrimary from '../components/ButtonPrimary'
import { useHistory } from 'react-router-dom'
import { useState } from 'react'

import useValidation from '../hooks/useValidation'

const schema = {
  category: {
    required: true,
     message: "Category is required",
  },
  user: {
    requireqd: false,
    message: null
  },
  title: {
    required: true,
    message: "Title is required",
  },
  content: {
    required: true,
    message: "Content is required",
  },
}

const PostForm = ({post, addPost, updatePost}) => {

  const history = useHistory()
  const [updating, setUpdating] = useState(false)

  const update = (values) => {
    setUpdating(true)
    setTimeout(() => {
      updatePost(values)
      setUpdating(false)
    },500)
  }

  const {
    handleField,
    values,
    errors,
    submitForm,
    resetValidations,
    loading,
  } = useValidation({
    schema,
    initValues: post,
    handler: addPost    
  })

  const cancel = () => {
    resetValidations()
    history.push("/posts")
  }

  const categories = [
    {id: "", name: ""},
    {id: "UX", name: "UX Design"},
    {id: "FE", name: "Frontend"},
    {id: "BE", name: "Backend"},
  ]

  return (
    <div className="overflow-hidden sm:rounded-md">
      <div className="grid grid-cols-6 gap-6 p-2">
        <SelectField
          className="col-span-3"
          label="Category"
          type="text"
          id="category"
          name="category"
          value={values.category}
          options={categories}
          onChange={handleField}
          invalid={errors.category?.invalid}
          invalidMessage={errors.category.message}            
        />
        <InputField
          className="col-span-9"
          label="Title"
          type="text"
          id="title"
          name="title"
          value={values.title}
          onChange={handleField}
          invalid={errors.title?.invalid}
          invalidMessage={errors.title.message}                      
        />
        <TextAreaField
          className="col-span-12"
          label="Content"
          type="text"
          id="content"
          name="content"
          rows="3"
          value={values.content}
          onChange={handleField}
          invalid={errors.content?.invalid}
          invalidMessage={errors.content.message}                           
        />       
      </div>
      <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
        {
          addPost
          ?
          <ButtonPrimary type="button" onClick={submitForm} loading={loading}>Save</ButtonPrimary>
          :
          <ButtonPrimary className="ml-2" type="button" onClick={() => update(values)} loading={updating}>Update</ButtonPrimary>
        }
        <ButtonPrimary className="ml-2" type="button" onClick={cancel}>{addPost?'Cancel':'Close'}</ButtonPrimary>
      </div>           
    </div>
  )

}

export default PostForm