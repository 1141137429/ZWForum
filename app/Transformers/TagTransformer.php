<?php
/**
 * Created by PhpStorm.
 * User: Zhangwei
 * Date: 2017/3/14
 * Time: 11:19
 */

namespace App\Transformers;


class TagTransformer extends BaseTransformer
{
    public function transformData($model)
    {
        return [
            'id' => $model->id,
            'name' => $model->name,
            'description' => $model->description,
            'topic_count' => $model->topic_count,
            'created_at' => $model->created_at,
            'link' => [
                'topic_tag_list' => route('api.topic.getTopicByTag',$model->id)
            ]
        ];
    }

}