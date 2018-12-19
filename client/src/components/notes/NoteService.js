import axios from "axios";

class NoteService {
  constructor() {
    this.service = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/note`,
      withCredentials: true
    })
  }

  showNotes = () => {
    return this.service.get('/notes')
    .then(response => response.data);
  }

  showNoteDetails = (id) => {
    return this.service.get(`/note/${id}`)
    .then(response => response.data);
  }

  showEditDetails = (id) => {
    return this.service.get(`/edit/${id}`)
    .then(response => response.data);
  }

  editNoteDetails = ( title, noteText, id) => {
    return this.service.post(`/edit`, {title: title, noteText: noteText, id:id})
    .then(response => response.data);
  }

  shareNoteDetails = (id, shareWith) => {
    return this.service.post(`/share/${id}`, {shareWith:shareWith})
    .then(response => response.data);
  }

  createNote = (title, noteText, photo, sketch, snippet) => {
    const formData = new FormData();
    formData.append('photo', photo);
    formData.append('title', title);
    formData.append('noteText', noteText);
    formData.append('sketch', sketch);
    formData.append('snippetLanguage', snippet.snippetLanguage);
    formData.append('snippetContent', snippet.snippetContent);

    return this.service.post('/note/createnote', formData, { headers: {
      "Content-Type": "multipart/form-data"
    }})
    .then(response => response.data)
  }

  deleteNote = (noteId) => {
    return this.service.delete(`/note/${noteId}`)
    .then(response => response.data)
  }

}

export default NoteService;