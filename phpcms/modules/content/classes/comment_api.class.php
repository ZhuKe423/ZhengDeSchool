<?php
defined('IN_PHPCMS') or exit('No permission resources.');
if (!module_exists('comment')) showmessage(L('module_not_exists'));
class comment_api {
	private $db;
	function __construct() {
		$this->db = pc_base::load_model('content_model');
	}
	
	/**
	 * ��ȡ������Ϣ
	 * @param $module      ģ��
	 * @param $contentid   ����ID
	 * @param $siteid      վ��ID
	 */
	function get_info($module, $contentid, $siteid) {
		list($module, $catid) = explode('_', $module);
		if (empty($contentid) || empty($catid)) {
			return false;
		}
		//�ж���Ŀ�Ƿ���� s
		$CATEGORYS = getcache('category_content_'.$siteid,'commons');
 		if(!$CATEGORYS[$catid]){
 			return false;
		}
		
		//�ж�ģ���Ƿ����
		$this_modelid = $CATEGORYS[$catid]['modelid'];
		$MODEL = getcache('model','commons'); 
		if(!$MODEL[$this_modelid]){
			return false;
		}
		
		$this->db->set_catid($catid);
		$r = $this->db->get_one(array('catid'=>$catid, 'id'=>$contentid), '`title`');
		$category = getcache('category_content_'.$siteid, 'commons');
		$model = getcache('model', 'commons');
		
		$cat = $category[$catid];
		$data_info = array();
		if ($cat['type']==0) {
			if ($model[$cat['modelid']]['tablename']) {
				$this->db->table_name = $this->db->db_tablepre.$model[$cat['modelid']]['tablename'].'_data';
				$data_info = $this->db->get_one(array('id'=>$contentid));
			}
		}
		
		if ($r) {
			return array('title'=>$r['title'], 'url'=>go($catid, $contentid, 1), 'allow_comment'=>(isset($data_info['allow_comment']) ? $data_info['allow_comment'] : 1));
		} else {
			return false;
		}
	}
}