<div class="pull-right fa fa-pull-right">
    <?php
        for ($page=1; $page <= $client_members['number_of_pages']; $page++) : 
            if (@(int)$_GET['currentpage']===(int)$page) : ?>
                <a href="<?= CLIENT_BASE_URL.$page_url; ?>&currentpage=<?= $page; ?>" type="button" 
                    class="btn btn-secondary pt-1 pb-1 pl-2 pr-2 ml-0 mr-0 mt-0"
                    style="font-weight: bold;"><?= $page; ?></a> 
		 		<?php else : ?>
                 <a href="<?= CLIENT_BASE_URL.$page_url; ?>&currentpage=<?= $page; ?>" type="button" 
                    class="btn btn-info pt-1 pb-1 pl-2 pr-2 ml-0 mr-0 mt-0"
                    style="font-weight: bold;"><?= $page; ?></a> 
		 	<?php endif; ?>
        <?php endfor;
    ?>
</div>