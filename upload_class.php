<?php
// 업로드 폴더 경로
$uploadsDir = "./temporary";

// 업로드 가능한 확장자 지정
$allowedExt = array("jpg", "JPG", "jpeg", "JPEG", "png", "PNG", "gif", "GIF");

switch($_POST['mode']) {
   
    // 임시경로로 업로드 된 이미지 파일은 크론으로 하루 한번 삭제한다.
    case "temporaryImageUpload" :

        $fileName = $_FILES['tmpFile']['name'];

        // 파일의 확장자를 분리
        $ext = array_pop(explode(".", $fileName));

        // 업로드 가능한 확장자 인지 확인한다.
        if(!in_array($ext, $allowedExt)) {
            $RetVal['message'] = "허용되지 않는 확장자입니다.";
        } else {

            // 업로드할 파일의 경로
            $tmpFile = $uploadsDir."/".date("YmdHis")."_".$fileName;


            if(move_uploaded_file($_FILES['tmpFile']['tmp_name'], $tmpFile)) {
                $RetVal['img'] = $tmpFile;
                $RetVal['ret'] = "succ";
            } else {
                $RetVal['message'] = "업로드시 문제가 발생하였습니다.\n다시 시도하여 주시기 바랍니다.";
            }
        }

        print json_encode($RetVal);
        return;
    break;

    default :
    break;
}
?>
