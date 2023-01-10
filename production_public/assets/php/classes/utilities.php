<?php
	
	/**
	 * 
	 	Utility Items
	 */
	class Utilities
	{
		public function card_info()
		{
			return [
				"settings"=> [
					"main_class"=>"wrapper class, (optional)", 
					"header_bg"=>"header background, (optional)", 
					"header_content"=>"header content, (optional)", 
					"footer_bg"=>"footer background, (optional)",
					"footer_content"=>"footer content, (optional)",
					"content"=>"content of box, (required)", 
					"theme"=>"card theme, {warning, danger, info, default, success, secondary}, default=warning, (optional)",
				],
				"debug"=> "show info about field, default=false, {true to show}",
			];
		}
		public function card(array $settings, bool $debug=false)
		{ 
			if ($debug) { ?>
				<pre>
					<?php print_r($this->card_info()); ?>
				</pre> <?php
			}
			$main_class = (isset($settings['main_class'])) ? $settings['main_class'] : "col-lg-6 col-sm-6";
			$header_bg = (isset($settings['header_bg'])) ? $settings['header_bg'] : "bg-white";
			$header_content = (isset($settings['header_content'])) ? $settings['header_content'] : null;
			$footer_bg = (isset($settings['footer_bg'])) ? $settings['footer_bg'] : "bg-white";
			$footer_content = (isset($settings['footer_content'])) ? $settings['footer_content'] : null;
			$content = (isset($settings['content'])) ? $settings['content'] : new Exception("content missing!", 1);
			$theme = (isset($settings['theme'])) ? $settings['theme'] : "secondary";
			?>
			<div class="card bg-<?= $theme; ?> shadow border-0 <?= $main_class; ?>">
				<?php 
					if (!is_null($header_content)) { ?>
						<div class="card-header <?= $header_bg; ?> pb-5"><?= $header_content; ?></div> <?php
					}
				?>
				<div class="card-body px-lg-5 py-lg-5"><?= $content; ?></div>
				<?php 
					if (!is_null($footer_content)) { ?>
						<div class="card-footer <?= $footer_bg; ?>"><?= $footer_content; ?></div> <?php
					}
				?>
			</div> <?php 
	    }

	    public function info_card_info()
		{
			return [
				"settings"=> [
					"main_class"=>"input wrapper class, (optional)", 
					"is_card"=>"is_card? default=true, (optional)", 
					"icon"=>"icon, (required)", 
					"icon_color"=>"color of icon, (required)", 
					"icon_bg"=>"nackground color of icon, (required)", 
					"card_type"=>"card type, {warning, danger, info, default, success, secondary}, default=warning, (optional)",
					"title_class"=>"title class, (optional)", 
					"title"=>"title, (required)", 
					"content"=>"content of box, (required)", 
					"has_link"=>"has link? default=false, (optional)", 
					"link"=>"link, default=#, (optional)", 
					"link_text"=>"link text, (required when has_link=true)",
				],
				"debug"=> "show info about field, default=false, {true to show}",
			];
		}
		public function info_card(array $settings, $data, bool $debug=false)
		{ 
			if ($debug) { ?>
				<pre>
					<?php print_r($this->info_card_info()); ?>
				</pre> <?php
			}
			$main_class = (isset($settings['main_class'])) ? $settings['main_class'] : "col-lg-4 col-sm-6";
			$is_card = (isset($settings['is_card'])) ? $settings['is_card'] : true;
			$icon = (isset($settings['icon'])) ? $settings['icon'] : new Exception("icon missing!", 1);
			$icon_color = (isset($settings['icon_color'])) ? $settings['icon_color'] : new Exception("icon_color missing!", 1);
			$icon_bg = (isset($settings['icon_bg'])) ? $settings['icon_bg'] : new Exception("icon_bg missing!", 1);
			$card_type = (isset($settings['card_type'])) ? $settings['card_type'] : "warning";
			$title_class = (isset($settings['title_class'])) ? $settings['title_class'] : "";
			$title = (isset($settings['title'])) ? $settings['title'] : new Exception("title missing!", 1);
			$content = (isset($settings['content'])) ? $settings['content'] : new Exception("content missing!", 1);
			$has_link = (isset($settings['has_link'])) ? $settings['has_link'] : false;
			$link = (isset($settings['link'])) ? $settings['link'] : "#";


			if ($is_card) { ?>
				<div class="card shadow shadow-lg--hover mt-5">
					<div class="card-body">
			<?php } ?>
					<div class="d-flex px-3 <?= $main_class; ?>">
						<div>
							<div class="icon icon-shape rounded-circle <?= ($is_card)? 
								'<?= $icon_bg; ?> <?= $icon_color; ?>': 
								'icon-lg <?= $icon_bg; ?> shadow <?= $icon_color; ?>'; ?>">
								<i class="<?= $icon; ?> <?= ($is_card)? '' : '<?= $icon_color; ?>'; ?>"></i>
							</div>
						</div>
						<div class="pl-4">
							<h5 class="<?= ($is_card)? 'title' : 'display-3'; ?> text-<?= $card_type; ?> <?= $title_class; ?>"><= $title; ?></h5>
							<?= $content; ?>
							<?php
			              		if ($has_link) { 
			              			$link_text = (isset($settings['link_text'])) ? $settings['link_text'] : new Exception("link text missing!", 1);
			              			?>
			              			<a href="<?= $link; ?>" class="text-<?= $card_type; ?>"><?= $link_text; ?></a>
			              		<?php }
			              	?>
						</div>
					</div> <?php
            if ($is_card) { ?>
					</div>
	            </div>
			<?php }
	    }

	    public function hover_lift_card_info()
		{
			return [
				"settings"=> [
					"main_class"=>"input wrapper class, (optional)", 
					"icon"=>"icon, (required)", 
					"icon_size"=>"size of icon, {lg, md, sm, xl}, default=lg, (optional)", 
					"card_type"=>"card type, {warning, danger, info, default, success, secondary}, default=warning, (optional)",
					"title_class"=>"title class, (optional)", 
					"title"=>"title, (required)", 
					"content"=>"content of box, (required)", 
					"badges"=>"badges. {must be an array e.g. [1, 2, 3, pc, desktop, mobile]}, default=null, (optional)",
					"has_link"=>"has link? default=false, (optional)", 
					"link"=>"link, default=#, (optional)", 
					"link_text"=>"link text, (required when has_link=true)",
				],
				"debug"=> "show info about field, default=false, {true to show}",
			];
		}
		public function hover_lift_card(array $settings, bool $debug=false)
		{ 
			if ($debug) { ?>
				<pre>
					<?php print_r($this->hover_lift_card_info()); ?>
				</pre> <?php
			}
			$main_class = (isset($settings['main_class'])) ? $settings['main_class'] : "col-lg-4 col-sm-6";
			$icon = (isset($settings['icon'])) ? $settings['icon'] : new Exception("icon missing!", 1);
			$icon_size = (isset($settings['icon_size'])) ? $settings['icon_size'] : "lg";
			$card_type = (isset($settings['card_type'])) ? $settings['card_type'] : "warning";
			$title_class = (isset($settings['title_class'])) ? $settings['title_class'] : "";
			$title = (isset($settings['title'])) ? $settings['title'] : new Exception("title missing!", 1);
			$content = (isset($settings['content'])) ? $settings['content'] : new Exception("content missing!", 1);
			$badges = (isset($settings['badges'])) ? $settings['badges'] : null; // must be an array e.g. [1, 2, 3, pc, desktop, mobile]
			$has_link = (isset($settings['has_link'])) ? $settings['has_link'] : false;
			$link = (isset($settings['link'])) ? $settings['link'] : "#";

			?>
			<div class="card card-lift--hover shadow border-0 <?= $main_class; ?>">
				<div class="card-body py-5">
					<div class="icon icon-<?= $icon_size; ?> icon-shape icon-shape-<?= $card_type; ?> shadow rounded-circle mb-4">
						<i class="<?= $icon; ?>"></i>
                    </div>
                    <h6 class="text-<?= $card_type; ?> text-uppercase <?= $title_class; ?>"><?= $title; ?></h6>
                    <!-- <div class="description mt-3"><?= $content; ?></div> -->
                    <div class="description mt-3">
                    	<?php 
							print_r($content);
                    	?>
                    </div>
                    <?php 
                    	if (!is_null($badges)) { ?>
                    		<div>
                    			<?php
                    				foreach ($badges as $badge) { ?>
		                    			<span class="badge badge-pill badge-?= $card_type; ?>"><?= $badge; ?></span>
		                    		<?php }
                    			?>
                    		</div> <?php
                    	}
                    ?>
                    <?php
              		if ($has_link) { 
              			$link_text = (isset($settings['link_text'])) ? $settings['link_text'] : new Exception("link text missing!", 1);
              			?>
              			<a href="<?= $link; ?>" class="btn btn-?= $card_type; ?> mt-4"><?= $link_text; ?></a>
              			<?php 
              		} ?>
                </div>
            </div><?php 
	    }

	    public function img_card_info()
		{
			return [
				"settings"=> [
					"main_class"=>"wrapper class, (optional)", 
					"has_img"=>"has image?, default=false, (optional)", 
					"img_src"=>"link to image, (required when has_img=true)",
					"card_type"=>"card type, {warning, danger, info, default, success, secondary}, default=warning, (optional)",
					"title_class"=>"title class, (optional)", 
					"title"=>"title, (required)", 
					"content"=>"content, (required)", 
					"foot_note"=>"foot note, default=null, (optional)", 
					"fill"=>"fill to over-ride card_type, (optional)",
				],
				"debug"=> "show info about field, default=false, {true to show}",
			];
		}
		public function img_card(array $settings, bool $debug=false)
		{ 
			if ($debug) { ?>
				<pre>
					<?php print_r($this->img_card_info()); ?>
				</pre> <?php
			}
			$main_class = (isset($settings['main_class'])) ? $settings['main_class'] : "pl-md-5";
			$has_img = (isset($settings['has_img'])) ? $settings['has_img'] : false;
			$card_type = (isset($settings['card_type'])) ? $settings['card_type'] : "warning";
			$title_class = (isset($settings['title_class'])) ? $settings['title_class'] : "";
			$title = (isset($settings['title'])) ? $settings['title'] : new Exception("title missing!", 1);
			$content = (isset($settings['content'])) ? $settings['content'] : new Exception("content missing!", 1);
			$foot_note = (isset($settings['foot_note'])) ? $settings['foot_note'] : null;
			$fill = (isset($settings['fill'])) ? $settings['fill'] : null; ?>

			<div class="card bg-<?= $card_type; ?> shadow border-0 <?= $main_class; ?>">
				<?php 
					if ($has_img) { 
						$img_src = (isset($settings['img_src'])) ? $settings['img_src'] : new Exception("icon missing!", 1);
						?>
						<img src="<?= $img_src; ?>" class="card-img-top"> <?php
					}
				?>
				<blockquote class="card-blockquote">
					<svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95" class="svg-bg">
						<polygon points="0,52 583,95 0,95" class="fill-<?= (is_null($fill)) ? $card_type : $fill; ?>" />
						<polygon points="0,42 583,95 683,0 0,95" opacity=".2" class="fill-<?= (is_null($fill)) ? $card_type : $fill; ?>" />
					</svg>
					<h4 class="display-3 font-weight-bold text-white <?= $title_class; ?>"><?= $title; ?></h4>
					<div class="lead text-italic text-white"><?= $content; ?></div>
					<?php 
						if (!is_null($foot_note)) { ?>
							<p class="text-italic small"><?= $foot_note; ?></p> <?php
						}
					?>
				</blockquote>
            </div><?php 
	    }

	    public function icon_info_box_info()
		{
			return [
				"settings"=> [
					"main_class"=>"wrapper class, (optional)", 
					"icon"=>"icon, (required)", 
					"icon_size"=>"size of icon, {lg, md, sm, xl}, default=lg, (optional)", 
					"icon_type"=>"type of icon, {warning, danger, info, default, success, secondary}, default=warning, (optional)",
					"title"=>"main title, (required)",
					"lead"=>"main text, (required)", 
					"content"=>"content of box, (required)", 
					"has_link"=>"has link? default=false, (optional)", 
					"link"=>"link, default=#, (optional)", 
					"link_text"=>"link text, (required when has_link=true)",
				],
				"debug"=> "show info about field, default=false, {true to show}",
			];
		}
		public function icon_info_box(array $settings, bool $debug=false)
		{ 
			if ($debug) { ?>
				<pre>
					<?php print_r($this->icon_info_box_info()); ?>
				</pre> <?php
			}
			$main_class = (isset($settings['main_class'])) ? $settings['main_class'] : "pl-md-5";
			$icon = (isset($settings['icon'])) ? $settings['icon'] : new Exception("icon missing!", 1);
			$icon_size = (isset($settings['icon_size'])) ? $settings['icon_size'] : "lg";
			$icon_type = (isset($settings['icon_type'])) ? $settings['icon_type'] : "warning";
			$title = (isset($settings['title'])) ? $settings['title'] : new Exception("title missing!", 1);
			$lead = (isset($settings['lead'])) ? $settings['lead'] : new Exception("lead missing!", 1);
			$content = (isset($settings['content'])) ? $settings['content'] : new Exception("content missing!", 1);
			$has_link = (isset($settings['has_link'])) ? $settings['has_link'] : false;
			$link = (isset($settings['link'])) ? $settings['link'] : "#";
			?>
			<div class="<?= $main_class; ?>">
				<div class="icon icon-<?= $icon_size; ?> icon-shape bg-<?= $icon_type; ?> shadow rounded-circle mb-5">
					<i class="<?= $icon; ?>"></i>
				</div>
              	<h3 style="text-transform: capitalize;"><= $title; ?></h3>
              	<div>
              		<p class="lead"><?= $lead; ?></p>
              		<?= $content; ?>
              	</div>
              	<?php
              		if ($has_link) { 
              			$link_text = (isset($settings['link_text'])) ? $settings['link_text'] : new Exception("link text missing!", 1);
              			?>
              			<a href="<?= $link; ?>" class="font-weight-bold text-<?= $icon_type; ?> mt-5"><?= $link_text; ?></a>
              		<?php }
              	?>
            </div><?php 
	    }
	}