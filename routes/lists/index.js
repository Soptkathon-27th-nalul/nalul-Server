const crypto = require('crypto');
const express = require('express');
const router = express.Router();
const util = require('../../modules/util');
const responseMessage = require('../../modules/responseMessage');
const statusCode = require('../../modules/statusCode');
const jwt = require('../../modules/jwt');
const {User, Post} = require('../../models');

router.get('/:classId', async(req, res) => {
    // 1. req.body에서 데이터 가져오기
    const {uuid} = req.body; 
    //2. request data 확인하기
    if(!uuid){
        console.log('필요한 값이 없습니다!');
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST,responseMessage.NULL_VALUE));
    }
    try{
        //3. 존재하는 uuid인지 확인하기. 존재하지 않는 uuid면 200.
        const alreadyId = await User.findOne({
            where : {
                uuid : uuid,
            },
            attributes : ['id']
        });
        if(!alreadyId){
            console.log('존재하지 않는 uuid 입니다.');
            const user = await User.create({
                uuid : uuid
            });
            const {accessToken}=await jwt.sign(user);

            return res.status(statusCode.OK).send(util.success(statusCode.OK,responseMessage.NO_USER, {
                "accessToken":accessToken,
                "recent9Pictures" : [
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    ""
                ]
            }));
        }

        const user = await User.findOne({
            where : {
                uuid : uuid,
            }
        });
        const recent9Pictures = await Post.findAll({
            where : {
                UserId : alreadyId,
            },
            attributes : ['imageUrl']
        });
        const {accessToken}=await jwt.sign(user);


        return res.status(statusCode.CREATED).send(util.success(statusCode.CREATED,responseMessage.SIGN_UP_SUCCESS, {
            "accessToken":accessToken,
            "recent9Pictures" : recent9Pictures
        }));
    
    } catch(error){
        console.error(error);
        return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR,responseMessage.SIGN_UP_FAIL));
    }
})


module.exports = router;