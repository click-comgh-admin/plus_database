<div class="row justify-content-center">
    <div class="col-md-12 col-lg-12">
        <div class="main-card mb-3 card shadow">
            <div class="card-body px-2">
                <?php
                    $mailAttachment = new MailAttachment("");
                    foreach ($notification as $key => $n) {
                        $client_name = isset($n['client_info']['name'])
                            ? $n['client_info']['name']: "";

                        $date = isset($n['date']['date']) ? getDateTimeAgo($n['date']['date']): "";

                        $date = isset($date['timeAgo'])? $date['timeAgo']: "";
                        
                        $photo = isset($n['client_info']['logo']) ? $n['client_info']['logo']: ""; 
                        
                        $content = isset($n['message']) ? $n['message']: "";

                        $viewsCount = isset($n['viewsCount']) ? (int)$n['viewsCount']: 0;

                        $commentCount = isset($n['commentCount']) ? (int)$n['commentCount']: 0;
                                                                        
                        $indicators = "";
                        $attachmentDisplay = "";
                        $indicatorId = "notification-{$n['id']}-Indicators";
                        $attachmentList = isset($n['attachments'])? $n['attachments']: [];
                        // print_r($attachmentList);
                        foreach ($attachmentList as $key => $attachmentItem) {
                            $isActive = ((int)$key === 0) ? ' active': '';
                            $indicators .= "<li data-target=\"#{$indicatorId}\" data-slide-to=\"{$key}\"
                                class=\"p-0 my-0 {$isActive}\"></li>";
                            
                            $openModalHtml = "<div>
                                <div>{$mailAttachment->display_file($attachmentItem['url'])}<br/></div>
                                {$mailAttachment->display_downloadable($attachmentItem['url'])}
                            </div>";
                            $openModalHtml = multilineText($openModalHtml);
                            $openModalHtml = str_replace('"', "'", $openModalHtml);
                            $openModalBtns = "<button class=\"btn btn-secondary\" type=\"button\"
                                data-dismiss=\"modal\">Close</button>";

                            $attachmentDisplay .= "<div class=\"carousel-item {$isActive}\">
                                <div class=\"container\">
                                    <div class=\"card bg-light border-neutral rounded p-5 text-center\"
                                        style=\"white-s pace: nowrap;\" data-toggle=\"modal\"
                                        open-modal--id=\"{$key}_{$indicatorId}\" open-modal--title=\"{$attachmentItem['filename']}\"
                                        open-modal--html=\"$openModalHtml\" open-modal--buttons='$openModalBtns' >
                                        <span class=\"fa {$mailAttachment->get_file_icon($attachmentItem['url'])}
                                            fa-5x\">
                                        </span>
                                    </div>
                                </div>
                            </div>";
                        }

                        $attachment = empty($attachmentList)
                            ? "": "<div class=\"w-100 p-1\">
                                <div class=\"row\">
                                    <div class=\"col-md-6\">
                                        <div id=\"$indicatorId\" class=\"carousel slide\" data-ride=\"carousel\">
                                            <div class=\"carousel-inner\">$attachmentDisplay</div>
                                            <a class=\"carousel-control-prev\" href=\"#$indicatorId\" role=\"button\" data-slide=\"prev\">
                                                <span class=\"carousel-control-prev-icon p-1 bg-dark border rounded\" aria-hidden=\"true\"></span>
                                                <span class=\"sr-only bg-dark\">Previous</span>
                                            </a>
                                            <a class=\"carousel-control-next\" href=\"#$indicatorId\" role=\"button\" data-slide=\"next\">
                                                <span class=\"carousel-control-next-icon p-1 bg-dark border rounded\" aria-hidden=\"true\"></span>
                                                <span class=\"sr-only bg-dark\">Next</span>
                                            </a>
                                            <ol class=\"carousel-indicators bg-light rounded p-0\">$indicators</ol>
                                        </div>
                                    </div>
                                    <div class=\"col-md-6\"></div>
                                </div>
                            </div>";
                        ?>
                        
                        <div class="d-flex justify-content-between">
                            <div class="m-0 p-0" style="width:65px">
                                <img width="50" height="50" class="rounded-circle shadow shadow-sm"
                                    src="<?= $photo; ?>" alt="img">
                            </div>
                            <div class="w-100 card p-1">
                                <div class="w-100 p-1 font-weight-bold">
                                    <span class=""><?= $client_name; ?></span>
                                    <span class="large font-weight-bold"> · </span>
                                    <span class="small font-weight-bold"><?= $date; ?></span>
                                </div>
                                <div class="w-100 p-1">
                                    <?= multilineText($content); ?>
                                    <?= $attachment; ?>
                                </div>
                                <div class="w-100 p-1">
                                    <div class="d-flex justify-content-start">
                                        <a class="btn btn-outline-light btn sm" target="_blank" type="button"
                                            href="<?= $viewsUrl; ?>" >
                                            <span class="text-dark"><?= $viewsCount; ?></span> 
                                            <span class="text-dark">Views</span>
                                            <i class="pe-7s-monitor font-weight-bold text-warning"></i>
                                        </a>
                                        <span class="p-1"></span>
                                        <button class="btn btn-outline-light btn sm" type="button" href="#" >
                                            <span class="text-dark"><?= $commentCount; ?></span> 
                                            <span class="text-dark">Comments</span>
                                            <i class="pe-7s-comment font-weight-bold text-warning"></i>
                                        </button>
                                        <?= getDeleteBtn($n); ?>
                                    </div>
                                    <div class="d-flex justify-content-start py-2">
                                        <a class="btn btn-outline-success btn sm" target="_blank" type="button"
                                            href="<?= $addCommentUrl; ?>">Add Comment</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <?php }
                ?>
            </div>
        </div>
    </div>
</div>