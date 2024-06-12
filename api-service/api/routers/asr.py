import os
import io
import ffmpeg
from fastapi import APIRouter, File

from fastapi import UploadFile, HTTPException, status

router = APIRouter()

import tempfile
#import whisper

async def transcribe_audio_or_video(file: bytes) -> str:
    if not file:
        raise ValueError("Uploaded file is empty")

    try:
        # Create a temporary file to hold the uploaded file
        with tempfile.NamedTemporaryFile(delete=False) as temp_file:
            temp_file.write(file)
            temp_file.flush()
            temp_file_path = temp_file.name
    except Exception as e:
        raise RuntimeError(f"Failed to create temporary file: {str(e)}")

    # try:
    #     # Load the Whisper model
    #     model = whisper.load_model("base")
    # except Exception as e:
    #     os.remove(temp_file_path)
    #     raise RuntimeError(f"Failed to load Whisper model: {str(e)}")

    # try:
    #     # Transcribe the audio/video file
    #     result = model.transcribe(temp_file_path)
    # except Exception as e:
    #     os.remove(temp_file_path)
    #     raise RuntimeError(f"Transcription failed: {str(e)}")

    # # Clean up the temporary file
    # os.remove(temp_file_path)
    # TODO: implement transcription
    # return result.get('text', 'Transcription failed')
    return "Transcription results here."


@router.post("/transcribe")
async def transcribe_endpoint(file: UploadFile = File(...)):
    try:
        file_contents = await file.read()
        transcription = await transcribe_audio_or_video(file_contents)
        return {"transcription": transcription}
    except Exception as e:
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=str(e))
