export function isImageFile(file: File) {
  return file.type.startsWith('image/');
}

export function isWithinFileSize(
  file: File,
  maxSize: number = 5 * 1024 * 1024,
): boolean {
  return file.size <= maxSize;
}

type ImageFileValidatorResult = {
  isValid: boolean;
  errorMessage: string | undefined;
};

export function imageFileValidator(file?: File): ImageFileValidatorResult {
  const result: ImageFileValidatorResult = {
    isValid: false,
    errorMessage: undefined,
  };
  if (!file) {
    result.isValid = true;
    return result;
  }
  if (!isImageFile(file)) {
    result.errorMessage = '이미지 파일만 업로드할 수 있습니다.';
    return result;
  }
  if (!isWithinFileSize(file)) {
    result.errorMessage = '이미지 파일 크기는 10MB를 초과할 수 없습니다.';
    return result;
  }
  result.isValid = true;

  return result;
}
